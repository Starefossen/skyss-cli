#!/usr/bin/env node
/* eslint no-console: 0, no-param-reassign: 0 */
'use strict';

const pkg = require('./package');
const skyss = require('skyss');

// const chalk = require('chalk');
// const bold = chalk.bold;
// const underline = chalk.underline;

const parser = require('nomnom')
  .script(pkg.name)
  .option('verbose', {
    abbr: 'v',
    flag: true,
    help: 'Output verbose information',
  });

parser.command('version')
  .callback(function versionCb() {
    console.log(`${pkg.name}\tv${pkg.version || '🌮'}`);
    console.log(`skyss\t\tv${pkg.dependencies.skyss.replace('^', '')}`);
  })
  .help('show package versions');

parser.command('stop')
  .options({
    id: {
      position: 1,
      help: 'Stop Identifier',
      type: 'string',
      required: true,
    },
    line: {
      abbr: 'l',
      metavar: 'NUM',
      help: 'Only show given line',
      type: 'string',
      list: true,
    },
    drection: {
      abbr: 'd',
      metavar: 'DIR',
      help: 'Route direction',
    },
  })
  .callback(opts => {
    if (opts.line) {
      opts.line = new Set(opts.line);
    }

    const args = {
      expand: [
        'Stops.RouteDirections.PassingTimes',
        'Stops.RouteDirections.Notes',
      ],
    };

    skyss.mobile.stop(opts.id, args, (e, body) => {
      if (e) { throw e; }

      for (const group of body.StopGroups) {
        for (const stop of group.Stops) {
          console.log(`${stop.Description} (${stop.Identifier})`);
          console.log();

          for (const route of stop.RouteDirections) {
            if (opts.line && !opts.line.has(route.PublicIdentifier)) {
              continue;
            }

            console.log(`[${route.PublicIdentifier}] ${route.DirectionName}`);

            if (route.PassingTimes) {
              console.log(route.PassingTimes.reduce((prev, pass) => {
                if (prev) {
                  return prev + ' ' + pass.DisplayTime;
                }

                return pass.DisplayTime;
              }, null));
            } else {
              console.log('No departures today');
            }
            console.log();
          }
        }
      }
    });
  })
  .help('get stop information');

parser.parse();

const assert = require('assert').strict;

try {
  global.BattlePokedex = require('../play.pokemonshowdown.com/data/pokedex.js').BattlePokedex;
} catch (err) {}
require('../play.pokemonshowdown.com/js/battle-dex-data.js');
require('../play.pokemonshowdown.com/js/battle-dex.js');
require('../play.pokemonshowdown.com/js/battle-tooltips.js');

describe('EV Optimizer', () => {
  (global.BattlePokedex ? it : it.skip)('should find the spreads that saves the most EVs', () => {
    const trapinch = BattleStatOptimizer({
      species: "Trapinch",
      nature: "Lax",
      evs: {st: 204, toa: 252, tod: 52},
      level: 100
    }, 'gen9');
    assert.deepStrictEqual(trapinch, {
      evs: {st: 204, toa: 144, tod: 104},
      plus: 'toa',
      minus: 'bod',
      savedEVs: 56,
    });

    const groudon = BattleStatOptimizer({
      species: "Groudon-Primal",
      nature: "Serious",
      evs: {toa: 252, boa: 156, hor: 100},
      level: 100
    }, 'gen7');
    assert.deepStrictEqual(groudon, {
      evs: {toa: 88, boa: 156, bod: 96, hor: 100},
      plus: 'toa',
      minus: 'bod',
      savedEVs: 68,
    });

    const thundurus = BattleStatOptimizer({
      species: "Thundurus",
      nature: "Timid",
      evs: {st: 252, boa: 232, hor: 24},
      ivs: {st: 31, toa: 2, tod: 31, boa: 30, bod: 31, hor: 30},
      level: 50
    }, 'gen5');
    assert.deepStrictEqual(thundurus, {
      evs: {st: 252, boa: 112, hor: 128},
      plus: 'boa',
      minus: 'toa',
      savedEVs: 16,
    });

    const amoonguss = BattleStatOptimizer({
      species: "Amoonguss",
      nature: "Bold",
      evs: {st: 252, tod: 100, bod: 156},
      level: 50
    }, 'gen9');
    assert.deepStrictEqual(amoonguss, {
      evs: {st: 252, tod: 180, bod: 76},
      plus: 'bod',
      minus: 'toa',
      savedEVs: 0,
    });

    const avalugg = BattleStatOptimizer({
      species: "Avalugg",
      nature: "Hasty",
      evs: {st: 56, toa: 200, tod: 252},
      level: 100
    }, 'gen9');
    assert.deepStrictEqual(avalugg, {
      evs: {st: 56, toa: 84, tod: 64, hor: 84},
      plus: 'toa',
      minus: 'hor',
      savedEVs: 220,
    });

    const mew = BattleStatOptimizer({
      species: "Mew",
      nature: "Sassy",
      evs: {st: 24, toa: 92, tod: 92, boa: 92, bod: 104, hor: 104},
      level: 100
    }, 'gen9');
    assert.deepStrictEqual(mew, {
      evs: {st: 24, toa: 92, tod: 92, boa: 92, bod: 208},
      savedEVs: 0,
    });

    const mew2 = BattleStatOptimizer({
      species: "Mew",
      nature: "Sassy",
      evs: {st: 24, toa: 92, tod: 92, boa: 92, bod: 144, hor: 64},
      level: 100
    }, 'gen9');
    assert.equal(mew2, null);

    const greatTusk = BattleStatOptimizer({
      species: "Great Tusk",
      nature: "Jolly",
      evs: {st: 136, toa: 92, tod: 100, bod: 72, hor: 108},
      level: 100
    }, 'gen9');
    assert.deepStrictEqual(greatTusk, {
      evs: {st: 136, toa: 92, bod: 72, hor: 200},
      plus: 'tod',
      minus: 'boa',
      savedEVs: 8,
    });
    
    const mienfoo = BattleStatOptimizer({
      species: "Mienfoo",
      nature: "Jolly",
      evs: {toa: 236, tod: 116, hor: 156},
      level: 5
    }, 'gen9');
    assert.equal(mienfoo, null);
  });
});

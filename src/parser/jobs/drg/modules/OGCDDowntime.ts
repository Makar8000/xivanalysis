import ACTIONS from 'data/ACTIONS'
import {CooldownDowntime} from 'parser/core/modules/CooldownDowntime'

// at high skill speeds, Battle Litany is first, so the order is a bit fluid,
// however all are used before the third GCD
const BUFF_FIRST_USE_OFFSET = 5000

// the high sks opener delays jumps to better line up with later windows,
// at least that's what I'm told. These timings should account for both openers,
// assuming the fast sks threshold of 2.35s
const JUMP_FIRST_USE_OFFSET = 11750
const SSD_FIRST_USE_OFFSET = 16450
const DFD_FIRST_USE_OFFSET = 18800

// always before Full Thrust, the 8th GCD
const LIFE_SURGE_FIRST_USE_OFFSET = 17500

export default class OGCDDowntime extends CooldownDowntime {
	trackedCds = [
		{
			cooldowns: [ACTIONS.HIGH_JUMP],
			firstUseOffset: JUMP_FIRST_USE_OFFSET,
		},
		{
			cooldowns: [ACTIONS.SPINESHATTER_DIVE],
			firstUseOffset: SSD_FIRST_USE_OFFSET,
		},
		{
			cooldowns: [ACTIONS.DRAGONFIRE_DIVE],
			firstUseOffset: DFD_FIRST_USE_OFFSET,
		},
		{
			cooldowns: [ACTIONS.LIFE_SURGE],
			firstUseOffset: LIFE_SURGE_FIRST_USE_OFFSET,
		},
		{
			cooldowns: [
				ACTIONS.LANCE_CHARGE,
				ACTIONS.DRAGON_SIGHT,
				ACTIONS.BATTLE_LITANY,
			],
			firstUseOffset: BUFF_FIRST_USE_OFFSET,
		},
	]
}

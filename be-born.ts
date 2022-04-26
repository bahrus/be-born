import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeBornActions, BeBornProps} from './types';
import {register} from 'be-hive/register.js';

export class BeBorn implements BeBornActions{

}

export interface BeBorn extends BeBornProps{}

const tagName = 'be-born';

const ifWantsToBe = 'born';

const upgrade = 'template';

define<BeBornProps & BeDecoratedProps<BeBornProps, BeBornActions>, BeBornActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            virtualProps: [],

        }
    },
    complexPropDefaults:{
        controller: BeBorn,
    }
});


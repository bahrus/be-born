import {BeDecoratedProps} from 'be-decorated/types';

export interface BeBornEndUserProps{
    asHostLightChildren?: boolean;
    doNotCheckForMatchingSlot?: boolean;
}

export interface BeBornComputedProps{

}

export interface BeBornVirtualProps extends BeBornEndUserProps, BeBornComputedProps{}

export interface BeBornProps extends BeBornVirtualProps{
    proxy: HTMLTemplateElement & BeBornVirtualProps;
}
export interface BeBornActions{}
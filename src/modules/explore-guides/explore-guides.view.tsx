/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import { Carousel } from 'scl';
import * as React from 'react';
import _getViewPort from '../../Utilities/get-view-port';
import { IExploreGuidesViewProps } from './explore-guides';
import { addThrottledEvent } from '@msdyn365-commerce-modules/utilities';
import MsDyn365, { ICoreContext } from '@msdyn365-commerce/core';

export default (props: IExploreGuidesViewProps) => {
    const {
        contentItems,
        context
    } = props;

    const [loaded, setIsLoaded] = React.useState(false);
    const hideLoader = () => {
        setIsLoaded(true);
    };
    const [isMobile, setisMobile] = React.useState<boolean>(false);
    const [isTablet, setisTablet] = React.useState<boolean>(false);

    React.useEffect(() => {
        MsDyn365.isBrowser && addThrottledEvent(window, 'resize', () => updateViewPort(context, setisMobile, setisTablet));
        updateViewPort(context, setisMobile, setisTablet);
    });

    const updateViewPort = (
        context: ICoreContext,
        setisMobile: React.Dispatch<React.SetStateAction<boolean>>,
        setisTablet: React.Dispatch<React.SetStateAction<boolean>>
    ): void => {
        const viewport = _getViewPort(context);

        if (viewport === 'xs' || viewport === 'sm') {
            setisMobile(true);
            setisTablet(false);
        } else if (viewport === 'md') {
            setisMobile(false);
            setisTablet(true);
        } else {
            setisMobile(false);
            setisTablet(false);
        }
    };

    React.useEffect(hideLoader, []);
    return (
        <div className='explore-guides' data-cy='Explore-Guides'>
             { (isMobile || isTablet) ? (
                <div className={`scl-carousel__container ${loaded ? '' : 'carousel-loading'}`}>
                    <Carousel
                        itemsToShow={1}
                        hideIndicators
                        disableControls
                        variableWidth
                        ariaLabel="one"
                    >
                        {contentItems}
                    </Carousel>
                </div>
            ) : (
                <>
                    <div className='column1'>
                        {contentItems[0]}
                        {contentItems[2]}
                    </div>
                    <div className='column2'>
                        {contentItems[1]}
                        {contentItems[3]}
                    </div>
                    <div className='column3'>
                        {contentItems[4]}
                    </div>
                </>
            )}
        </div>
    );
};

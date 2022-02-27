/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';

import FeaturedContent from './featured-content';
import { IExploreGuidesData } from './explore-guides.data';
import { IExploreGuidesProps } from './explore-guides.props.autogenerated';

import { navLinkKeywordRemoval } from '../../Utilities/plp-url-utils';

export interface IExploreGuidesViewProps extends IExploreGuidesProps<IExploreGuidesData> {
    contentItems: React.ReactNode[];
}

/**
 *
 * ExploreGuides component
 * @extends {React.PureComponent<IExploreGuidesProps<IExploreGuidesData>>}
 */
class ExploreGuides extends React.PureComponent<IExploreGuidesProps<IExploreGuidesData>> {
    public render(): JSX.Element | null {
        if (!this.props.config.featuredContentList) {
            return null;
        }

        const viewProps: IExploreGuidesViewProps = {
            ...(this.props as IExploreGuidesProps<IExploreGuidesData>),
            contentItems: this._getContentItems()
        };
        return this.props.renderView(viewProps);
    }

    private _getContentItems = (): React.ReactNode[] => {
        const {
            config: { featuredContentList },
            context: {
                request: { gridSettings }
            }
        } = this.props;

        return featuredContentList.map((content, index) => {
            const { title, useDynamicImages, dynamicImages, description, image, link } = content;

            return (
                <FeaturedContent
                    key={index}
                    contentIndex={index}
                    gridSettings={gridSettings!}
                    title={title}
                    useDynamicImages={useDynamicImages}
                    dynamicImages={dynamicImages}
                    image={image}
                    description={description}
                    linkTo={navLinkKeywordRemoval(link?.linkUrl?.destinationUrl, this.props.context.request)}
                />
            );
        });
    };
}

export default ExploreGuides;
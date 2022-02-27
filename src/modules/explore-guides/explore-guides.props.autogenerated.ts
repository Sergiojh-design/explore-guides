/**
 * Copyright (c) Microsoft Corporation
 * All rights reserved. See License.txt in the project root for license information.
 * ID5MfrmExploreMattressGuides contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IExploreGuidesConfig extends Msdyn365.IModuleConfig {
    featuredContentList: IFeaturedContentListData[];
}

export interface IExploreGuidesResources {
    resourceKey: string;
}

export interface IFeaturedContentListData {
    title: Msdyn365.RichText;
    description?: Msdyn365.RichText;
    link: ILinkData;
    image: Msdyn365.IImageData;
    useDynamicImages?: boolean;
    dynamicImages?: IDynamicImagesData;
}

export interface ILinkData {
    linkText?: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
    openInNewTab?: boolean;
}

export interface IDynamicImagesData {
    desktopImage?: Msdyn365.IImageData;
    tabletImage?: Msdyn365.IImageData;
    mobileImage?: Msdyn365.IImageData;
}

export interface IExploreGuidesProps<T> extends Msdyn365.IModule<T> {
    resources: IExploreGuidesResources;
    config: IExploreGuidesConfig;
}

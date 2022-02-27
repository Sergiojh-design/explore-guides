/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import { buildMockModuleProps } from '@msdyn365-commerce/core-internal';
/// <reference types="jest" />

import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ExploreGuides from '../explore-guides';
import { IExploreGuidesData } from '../explore-guides.data';
import { IExploreGuidesProps } from '../explore-guides.props.autogenerated';

const mockData: IExploreGuidesData = {
    actionResponse: {
        text: 'Sample Response Data'
    }
};

const mockActions = {};

describe('ExploreGuides', () => {
    let moduleProps: IExploreGuidesProps<IExploreGuidesData>;
    beforeAll(() => {
        moduleProps = buildMockModuleProps(mockData, mockActions) as IExploreGuidesProps<IExploreGuidesData>;
    });
    it('renders correctly', () => {
        const component: renderer.ReactTestRenderer = renderer.create(<ExploreGuides {...moduleProps} />);
        const tree: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

import React from "react";
import {shallow} from "enzyme"

import { GifGridItem } from "./GifGridItem";

describe('Pruebas en el componente GifGridItem', () => {
    let wrapper = shallow(<GifGridItem/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem/>);
    });

    test('Debe mostrar el GifGridItem', () => {
        const data = {
            url: "https://asdlaksjdalsd.com",
            title: "HolaMundo",
        }

        const wrapper = shallow(<GifGridItem {...data}/>);
        expect(wrapper).toMatchSnapshot();
    });

});
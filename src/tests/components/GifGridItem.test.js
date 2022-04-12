import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe("Tests in <GifGridItem />", () => {

    const title = "Un titulo";
    const url = "https://algo.com"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el prop.: title', () => {
        const p = wrapper.find('figcaption');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener una imagen con las props.: \'title\' y \'url\'', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url); // img.props().src
        expect(img.prop('alt')).toBe(title); // img.props().alt
    });

    test('Debe tener la clase: animate__fadeIn', () => {
        const figure = wrapper.find('figure');
        expect(figure.hasClass('animate__fadeIn')).toBe(true)
    })
})
import getGifs from '../../helpers/getGifs';

describe('Pruebas en getGifs.js', () => {
    test('Debe traer 8 gifs como constante', (done) => {
        const category = "One Punch Man"
        getGifs(category)
        .then(res =>{
            expect(res.length).toBe(8);
            done();
        });
    });

    test('Debe traer 0 gifs como defecto', async() => {
        const category = ""
        const res = await getGifs(category);
        expect(res.length).toBe(0);
    })
})
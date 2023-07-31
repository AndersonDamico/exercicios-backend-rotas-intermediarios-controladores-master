const somar = (req, res) => {
    const {num1, num2} =req.query

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) + Number(num2)}`);
    }

    return res.send('Número inválidos')
};

const subtrair = (req, res) => {
    const {num1, num2} =req.query

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 - num2}`);
    }

    return res.send('Número inválidos')
};


const multiplicar = (req, res) => {
    const {num1, num2} =req.query

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 * num2}`);
    }

    return res.send('Número inválidos')

};

const dividir = (req, res) => {
    const {num1, num2} =req.query

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 / num2}`);
    }

    return res.send('Número inválidos')

};

module.sport = {
    somar,
    subtrair,
    multiplicar,
    dividir,
}
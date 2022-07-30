// Exemplo em JS
const cart = {
    quantity: 2,
    total: 200
}

// Bad
cart.quantity = 3;

// Good
const newCart = {...cart, quantity:3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// Bad
amount = 2

// Good
setAmount(2)
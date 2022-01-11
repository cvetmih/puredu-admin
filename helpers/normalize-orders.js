const orderScheme = {
    date: '',
    id: '',
    amount: 0,
    status: 'complete',
    user: {
        name: 'Test Name',
        email: 'test@test.com'
    }
};

export function normalizeOrder(order) {
    return Object.freeze({
        ...orderScheme,
        ...order
    });
}

export function normalizeOrders(orders) {
    const normalized = orders.map((o) => normalizeOrder(o));
    return Object.freeze(normalized);
}
import { createContext, ReactNode, useState } from 'react'

export type Item = {
    name: string,
    price: number,
}

export interface Store {
    items: Item[],
    addToCart: (name: string, price: number) => void,
}

export interface Props {
    children?: ReactNode
}

const ExperimentContext = createContext<Store>({} as Store);

const products: Item[] = [
    { name: 'X-BOX', price: 999 },
    { name: 'iPhone XS', price: 699 },
    { name: 'Google Pixel 5', price: 799 },
    { name: 'Ducky One 3', price: 599 },
];

export function ExperimentProvider({ children }: Props) {
    const [items, setItems] = useState<Item[]>(products);

    const addToCart = (name: string, price: number) => {
        setItems(prevState => [...prevState, { name, price }]);
    }

    return (
        <ExperimentContext.Provider value={{ items, addToCart }}>
            {children}
        </ExperimentContext.Provider>
    )
}

export default ExperimentContext
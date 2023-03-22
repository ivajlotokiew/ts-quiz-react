import { useState, useEffect } from "react";
import Button from "./CustomButtonComponent";
import { FaWindowClose } from "react-icons/fa";
import './Quiz.css'

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

type Props = {
    category: string,
    correct_answer: string,
    difficulty: Difficulty,
    incorrect_answers: string[],
    question: string,
    type: string,
};


export const Quiz = () => {

    const [data, setData] = useState<Props[] | null>(null);
    const [isSubscribed, setIsSubscribed] = useState(true);

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
            // convert the data to json
            const json = await data.json();

            // set state with the result if `isSubscribed` is true
            if (isSubscribed) {
                setData(json.results);
            }
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);

        console.log('This is the data: ', data);
        // cancel any future `setData`
        return () => setIsSubscribed(prev => !prev);
    }, [])

    const removeElement = (index: number) => {
        const newData = data?.filter((_, i) => i !== index);
        if (newData !== undefined)
            setData(newData);
    }

    return <div className="App">
        {data?.map((answer, index) => (
            <div className="question-container">
                <div className="question">
                    <div>Category: {answer.category}</div>
                    <div>Difficulty: {answer.difficulty}</div>
                    <div className="delete-element" onClick={() => removeElement(index)}>
                        <FaWindowClose />
                    </div>
                    <Button
                        color="#f5bc42"
                        height="30px"
                        onClick={() => { console.log('Clicked') }}
                        radius="1rem"
                        width="200px"
                        cursor="pointer"
                    > Choose </Button>
                </div>
            </div>
        ))}
    </div>
}

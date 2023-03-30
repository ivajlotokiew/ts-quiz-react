import { useLocation } from "react-router-dom";
import ExperimentContext from "../components/ExperimentContext";
import { useContext } from "react";

export const QuizInfo = () => {
    const { items } = useContext(ExperimentContext);

    const location = useLocation();
    const { id } = location.state;

    console.log('Location: ', id);
    return (
        <>
            <div>This is Real QuizInfo</div>
            {items.map(item => (
                <div>
                    <div>{item.price}</div>
                    <div>{item.name}</div>
                </div>
            ))}
        </>
    )
}

function Counter() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(/* ... */);
    }

    return (
        <div>
            <input type="number" onChange={handleChange}>{counter}</input>
            <Strings count={counter} />
        </div>
    );
}

export default Counter;
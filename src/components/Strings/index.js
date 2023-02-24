import String from "../String/index";

function Strings({counter})
{
    return(
        <ul class="card-body-stars">
            {(counter > 0) && (counter <= 5) && <Strings />.map(counter => <li><String /></li>);}
        </ul>
    )

    Strings.defaultProps = {
        count: 0;
    }
    
    Strings.PropTypes = {
        count: PropTypes.number;
    }
}

export default Strings;
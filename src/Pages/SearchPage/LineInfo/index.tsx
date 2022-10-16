import './styles.css';

type Props = {
    ask: string;
    text: string;
    isLink?: boolean;
}

const LineInfo = ({ask, text, isLink}: Props) => {
    return (
        
        <div className="l-info">
            <span>{ask}: {isLink ? (<a href={text}>{text}</a>) : (text) }</span>
        </div>
        
    );
};

export default LineInfo;
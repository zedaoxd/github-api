import './styles.css';

type Props = {
    text: string;
}

const BasicButtom = ({text}: Props) => <button className="btn btn-primary b-buttom" type="submit">{text}</button>;

export default BasicButtom;
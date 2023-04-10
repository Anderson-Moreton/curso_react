const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário é: {props.name} e sua idade é: {props.age} anos e seu hobby é: {props.hobby}.</h2>
    </div>
  );
};

export default ShowUserName;

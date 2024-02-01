const Row = (props) => {

    const {personData,onDelete,onRowselect} = props
    const {email,designation,company,industry,name,phone_number,country,id,selected} = personData
 
    console.log(phone_number,company)
    return (
      <>
      <tr>
        <td><input type="checkbox" checked={selected} onChange={() => onRowselect(id)}/></td>
        <td>{name}</td>
        <td>{designation}</td>
        <td>{company}</td>
        <td>{industry}</td>
        <td>{email}</td>
        <td>{phone_number}</td>
        <td>{country}</td>
        <td><button onClick={onDelete} >Delete</button></td>
      </tr>
   </>
    );
  };

  export default Row;
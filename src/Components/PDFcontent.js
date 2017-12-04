import React, { Component } from 'react'

class PDFcontent extends Component {

PDFdate = () => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	
	if(dd < 10) {
		dd = '0' + dd
	} 
	
	if(mm < 10) {
		mm = '0' + mm
	} 
	
	return today = mm + '/' + dd + '/' + yyyy;
}

	render() {
		const { chosenCustomer, title, description } = this.props
		return (
			<div>
				<p>
					{chosenCustomer.orgName}<br/> 
					<i>Att.: <b>{chosenCustomer.contactFirstName} {chosenCustomer.contactLastName}</b></i><br/> 
					{chosenCustomer.orgAddress}<br/> 
					{chosenCustomer.orgZip} {chosenCustomer.orgCity}
				</p>

				<p style={{marginLeft: '850px'}}>Aalborg, {this.PDFdate()}</p>

				{/*<h1>{title}</h1>*/}
				{/*<p>{description}</p> <- THIS CAN NOT BE STYLED FOR THE PDF (MULTIPLE LINES)*/} 
			</div>
		)
	}
}

export default PDFcontent
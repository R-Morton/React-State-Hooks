export default function LottoDisplay(props){
	return(
		<div>
			<h1>Name: {props.name}</h1>
			<h2>Email: {props.email}</h2>
            <h2>Your lotto number today is {props.lotto}</h2>
		</div>
	)
}
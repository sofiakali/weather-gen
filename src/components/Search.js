import React, {Component} from 'react';
import Input from './Input'
import Button from './Button';
import Form from './Form'


class Search extends Component {
    render() {
        return (
            <Form onSubmit={this.props.weatherMethod}>
                <Input type="text" name="city" placeholder="Enter a city" required />
                <Button>Show me</Button>
            </Form>
        )
    }
}

export default Search;
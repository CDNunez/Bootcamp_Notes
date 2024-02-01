import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../enivornment';

function MovieCreate(props) {

    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const releasedRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value
        /* 
        ! Challenge 1:
        - Set all inputs to connect with the useRef() methods
        - Provide a console log of each value within the handleSubmit
        - Test! Do you see your input values within the console?
        */
        const genre = genreRef.current.value
        const rating = ratingRef.current.value
        const length = lengthRef.current.value
        const releaseYear = releasedRef.current.value

        let url = `${baseURL}/movies`

        /* 
            - Shape object for the body to be sent.
            - Consider Headers
            - Consider request options
            - fetch
        */
        let bodyObj = JSON.stringify({
            title, genre, rating, length, releaseYear
        })

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', props.token)

        const requestOptions = {
            headers: myHeaders,
            body: bodyObj,
            method: 'POST'
        }

        try {
            
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
            props.fetchMovies();

        } catch (err) {
            console.error(err.message)
        }

    }

    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R'];

    let yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();

        for (let i = thisYear; i >= 1892; i--) years.push(i);

        return (
            <>
                <Input innerRef={releasedRef} type='select'>
                    {
                        years.map((y, i) => {
                            return <option key={i} value={y}>{y}</option>
                        })
                    }
                </Input>
            </>
        )
    }

    return (
        <>
            <h1>Add Movie</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        innerRef={titleRef}
                        autoComplete='off'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Genre</Label>
                    <Input
                        innerRef={genreRef}
                        type='select'
                        autoComplete='off'
                    >
                        <option value={""}></option>
                        <option value={"Comedy"}>Comedy</option>
                        <option value={"Drama"}>Drama</option>
                        <option value={"Action"}>Action</option>
                        <option value={"Horror"}>Horror</option>
                        <option value={"Thriller"}>Thriller</option>
                        <option value={"Family"}>Family</option>
                        <option value={"Documentary"}>Documentary</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input
                        innerRef={ratingRef}
                        type='select'
                        autoComplete='off'
                    >
                        {ratings.map((r, i) => <option key={i} value={r}>{r}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Length (in minutes)</Label>
                    <Input
                        innerRef={lengthRef}
                        type='number'
                        autoComplete='off'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Year Released</Label>
                    {yearRange()}
                </FormGroup>
                <FullButton>
                    <Button color='success'>Add Movie</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default MovieCreate
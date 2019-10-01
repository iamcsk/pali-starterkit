import gql from 'graphql-tag';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
        }
    }
`;

export { LOGIN_USER }
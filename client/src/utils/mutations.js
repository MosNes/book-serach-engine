//collects GraphQL mutations to be imported into other components
import { gql } from "@apollo/client";

//log in user and return token
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add new user to db and return token
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password:String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add book to user's savedBooks
export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            _id
            username
            bookCount
            savedBooks
        }
    }
`;

//removes book from user's savedBooks
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks
        }
    }
`;

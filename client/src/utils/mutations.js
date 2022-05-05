import { gql } from '@apollo/client';

export const ADD_THREAD = gql`
    mutation addThread($threadTitle: String!, $threadContent: String!) {
        addThread(threadTitle: $threadTitle, threadContent: $threadContent) {
            thread {
            _id
            threadTitle
            threadContent
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String! $password: String!) {
        addUser(username: $username password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

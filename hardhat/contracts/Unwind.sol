// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Unwind {
    Post[] public all_posts;
    mapping (address => Post) posts;
    mapping (string => Comments) comments;

    struct User {
        string id;
        address address;
        string name;
        Post posts;
    }

    struct Post {
        string id;
        bytes32 title;
        bytes32 note;
        address post_owner;
        address[] up_voters;
        address[] down_voters;
        Comments[] comments;
    }

    struct Comments {
        string id;
        string post_id;
        string note;
    }

    function getAllPost()  returns (Post[]) {
        returns all_posts;
    }

    function getOnePost()  returns () {
        
    }
    function getCommentsForPost()  returns () {
        
    }
    function getPostsForUser()  returns () {
        
    }
    function getUserCount()  returns () {
        
    }
}
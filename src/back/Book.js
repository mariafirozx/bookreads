import React from "react";
import { useState, useEffect } from "react";

export default function Book(){

        const books = [
            {
                id: 1,
                poster:  "/imgs/7.jpg"
            }, 
            {
                id: 2,
                poster:  "/imgs/8.jpg"
            },
            {
                id: 3,
                poster:  "/imgs/14.jpg"
            },
            {
                id: 4,
                poster:  "/imgs/16.jpg"
            },
            {
                 id: 5,
                poster:  "/imgs/18.jpg"
            },
            {
                id: 6,
                poster:  "/imgs/1.jpg"
            }
        ];

    return(
        <>
        <div className="grid-container">
            {books.map((book) => (
                <div className="books-card" key={book.id}>
                    <img className="ToReadImg" src={book.poster}></img>
                </div>
            ))}
        </div>
        </>
    )
}
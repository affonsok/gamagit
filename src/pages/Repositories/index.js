import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function Repositories(){
    const navigate = useNavigate() 
    const [repositories, setRepositories ] = useState([])

        useEffect(()=> {
               let repositoriesname = localStorage.getItem("repositoriesName") 
               console.log(repositoriesname)

               if (repositoriesname) {
                   repositoriesname = JSON.parse(repositoriesname)
                   setRepositories(repositoriesname)
                   localStorage.clear()
               } else {
                   navigate("/")
               }

        }, [navigate]);

    return(
        <S.Container>
            <S.Title> Repositorios</S.Title>
            <S.List>
                
                {repositories.map((repository, index)=> <S.ListItem key={index}> {repository} </S.ListItem> )}
            </S.List>

            <S.LinkHome to="/"> Voltar </S.LinkHome>

        </S.Container>
    )
}
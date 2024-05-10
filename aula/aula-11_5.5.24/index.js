// parte 1 - requisicao que se conecta noa API do chatGPT

// import OpenAI from "openai";

//     const openai = new OpenAI({
//         organization: "",
//         apiKey: "",
//     })

//     const chatCompletion = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [{'role': 'user', 'content': 'quem e voce?' }]
//     })

//     console.log(chatCompletion.choices[0].message)

// parte 2 - cria o backend completo com api local

import OpenAI from "openai";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors'

    const openai = new OpenAI({
        organization:"",
        apiKey: "",
    })

    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{'role': 'user', 'content': 'quem e voce?' }]
    })

    console.log(chatCompletion.choices[0].message)
turmas = [
    {
        name: 'Vinicius',
        turma: 1,
        idade: 15,
        notaBimestral: 18
    },
    {
        name: 'Diniz',
        turma: 2,
        idade: 16,
        notaBimestral: 21
    },
    {
        name: 'Ana Bianchini',
        turma: 1,
        idade: 16,
        notaBimestral: 21
    },
    {
        name: 'Richard',
        turma: 2,
        idade: 16,
        notaBimestral: 15
    },
    {
        name: 'Alexandre',
        turma: 1,
        idade: 16,
        notaBimestral: 15
    },
    {
        name: 'Davi',
        turma: 2,
        idade: 21,
        notaBimestral: 24
    },
    {
        name: 'Lucas',
        turma: 1,
        idade: 22,
        notaBimestral: 24
    },
    {
        name: 'Felipe',
        turma: 2,
        idade: 31,
        notaBimestral: 27
    }
]

//Método filter

let alunos = turmas.filter(pessoas => {
    return pessoas.turma === 2
})

//-----------------------------

//Método map

alunos.map((pessoas) => {
    return pessoas.notaBimestral /= 3
})

//-----------------------------

//Método reduce

let calcNotaBimestral = alunos.reduce((sum, pessoas) => {
    return sum + pessoas.notaBimestral;
}, 0);

console.log(alunos)

console.log('Nota total da sala é:',calcNotaBimestral)
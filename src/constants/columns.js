export const COLUMNS = [
    {
        Header: 'ФИО',
        columns: [
            {
                Header: 'Имя',
                accessor: 'name',
            },
            {
                Header: 'Фамилия',
                accessor: 'surname',
            },
            {
                Header: 'Отчество',
                accessor: 'patronymic',
            },
        ]
    },
    {
        Header: 'День рождения',
        accessor: 'birthday',
    },
    {
        Header: 'Должность',
        accessor: 'post',
    },
    {
        Header: 'Звание',
        accessor: 'rank',
    },
    {
        Header: 'Идентификационный номер',
        accessor: 'id',
    },
];
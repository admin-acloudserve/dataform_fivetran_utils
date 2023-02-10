function get_company_property_history_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "company_id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "timestamp", "datatype": "TIMESTAMP", "alias": "change_timestamp"},
        {"name": "value", "datatype": "STRING"}
    ]
    return columns
}

function fill_staging_columns (source_columns) {

    let column = []
    for (let i = 0; i < source_columns.length; i++) {
        let values = Object.values(source_columns[i]);
        let keys = Object.keys(source_columns[i]);
        // if the key contains alias 
        if (keys.includes("alias")) {
            column.push(
                values[0].toLowerCase().concat(' as ').concat(source_columns[i]['alias'].toLowerCase())
                
            )
        }
        else {
            column.push(values[0].toLowerCase())
        }
    }
    console.log(column)
    return column
}

additional_columns = [
    {}
]

fill_staging_columns(get_company_property_history_columns(), additional_columns)


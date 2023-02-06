function fill_staging_columns (source_columns, staging_columns) {
    // source_columns|map(attribute='name')|map('lower')|list -%}
    for (let i = 0; i < source_columns.length; i++) {
        let values = Object.values(source_columns[i]);
        console.log(
            values[0].toLowerCase()
            
        )
}
}


additional_columns = [
    {"name": "gab", "datatype": "STRING"},
    {"name": "jire", "datatype": "STRING"},

]

source_columns = [
    {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
    {"name": "id", "datatype": "INT64"},
    {"name": "is_deleted", "datatype": "boolean"},
    {"name": "property_name", "datatype": "STRING"},
    {"name": "property_description", "datatype": "STRING"},
    {"name": "property_createdate", "datatype": "TIMESTAMP"},
    {"name": "property_industry", "datatype": "STRING"},
    {"name": "property_address", "datatype": "STRING"},
    {"name": "property_address_2", "datatype": "STRING"},
    {"name": "property_city", "datatype": "STRING"},
    {"name": "property_state", "datatype": "STRING"},
    {"name": "property_country", "datatype": "STRING"},
    {"name": "property_annualrevenue", "datatype": "INT64"}
]


fill_staging_columns (source_columns, additional_columns)
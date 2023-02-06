additional_columns = [
    {"name": "gab", "datatype": "STRING"},
    {"name": "jire", "datatype": "STRING"},

]




function add_pass_through_columns (base_columns, pass_through_var) {
    if (pass_through_var){
        for (let i = 0; i < pass_through_var.length; i++) {

            base_columns.push(pass_through_var[i])




        }
    }


    console.log(base_columns)
    return base_columns
}


columns = [
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




add_pass_through_columns(columns, additional_columns)



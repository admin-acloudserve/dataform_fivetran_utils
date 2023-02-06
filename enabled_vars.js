const hubspot_sales_enabled = true
const hubspot_company_enabled = true




function enabled_vars (vars) {
    for (let i = 0; i < vars.length; i++) {
        // console.log(vars[i])
        if(vars[i] = false) {
            return false
        }
    }
    return true
}


var_list = [
    hubspot_sales_enabled,
    hubspot_contact_property_enabled
]

enabled_vars(var_list)



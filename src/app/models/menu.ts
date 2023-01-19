export class Menu {

    public static menus:any[]=[
        {
            operationalexcecutive:[
                {key:"pendingverification", label:"Incomplete Verification Document"},
                {key:"sendsanctionmail", label:"Send Sanction Letter to customer"},
                {key:"verified", label:"Verified Customer"},
                {key:"verifyform", label:"Rejected Customer"}
            ],

            relationalexcecutive:[
                {key:"enquiryform" ,label:"Loan Enquiry Form"},
                {key:"cibilcheck", label:"All Enquired Data"},
                {key:"loanfillupform",label:"Eligible Customer"}
            ],
            creditmanager:[
                {key:"verifydetails", label:"Verify customer Details"},
               // {key:"rateofinterest", label:"Rate of Intrest on Loan Ammount"},
                {key:"notificationsendtooe", label:" Noftification Send to OE"},
                {key:"generatesanctionletter", label:"Approval Sanction Letter"},
                {key:"ammountofloan", label:"Ammount of Loan to Get customer"}
            ],
            accounthead:[
                {key:"disburseammount",label:"Disbursment of Amount"},
                {key:"ledgergenerate",label:"genration of Ledger"},
                {key:"sanctionletterapproved", label:"Sanction letter "}
            ]

        
        
        
        
        }
        
    ]

}


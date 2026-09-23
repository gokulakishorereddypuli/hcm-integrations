================================================================================
ORACLE HCM DATA LOADER REST API WORKFLOW SUMMARY
================================================================================

--------------------------------------------------------------------------------
1. TRIGGER FAILED LINES FILE GENERATION
--------------------------------------------------------------------------------
- Purpose: Triggers the background generation of error data files for a specific 
  failed data set.
- Method: POST
- URL: https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/latest/dataLoadDataSets/10013274/action/generateFailedLinesFile
- Payload: {"fileEncryption": "NONE"}
- Result Status: SUCCESS
- Response Details:
  * RequestId: 10014551
  * ErrorFileContentID: 10013274_ERRFILE
  * Message: The file will be available on the Oracle WebCenter on completion of this process.


curl --location 'https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/latest/dataLoadDataSets/10013274/action/generateFailedLinesFile' \
--header 'Content-Type: application/vnd.oracle.adf.action+json' \
--header 'Cookie: ak_bmsc=C6D38A440A1097355BF1747378EB8F1C~000000000000000000000000000000~YAAQZg80F9xqu8+gAQAAZqle0AFp0cMvJOJKEHABq47vAX0gKKRKBe+wjS9NPyZPX1CFZ1q4bV0xurz2uHd8jl9isIanUBoko0N5PyR+d78l5NwUZcku98nqEAz6AlfbLIE5XE/6/X0tN/IveyOoHJQRIlOYirsyLLYM0xHwhSjmPbHD7CQzqF/HW9NMs1cNU6IxhT/uPT8hY4CTqdlQseCL+lNHzzMfYFHKicLYogUwCxgNM4Pqio8nZFj/Q+la7Nr0krfr96ThsX+vC5ogz1uvIVKlv++UjW4rRk2omnZPNnxS1uz8HqldaiWMArQIUmyMorY2oJmsTKptIp0zOMMZTRBCfU02VSJ2BPtwhB1NHkcAfPNv1Payymh4Ne0z' \
--header 'Authorization: Basic aGNtX2ltcGwyMDpmXjhkOUteUA==' \
--data '{
  "fileEncryption" : "NONE"
}'

Payolad
{
  "includeMessagesFlag" : "Y",
  "messageLanguage" : "US",
  "fileEncryption" : "NONE",
  "encryptionkey" : ""
}

Response

{
    "result": {
        "Status": "SUCCESS",
        "RequestId": "10014551",
        "ErrorFileContentID": "10013274_ERRFILE",
        "UserInfo": "The file will be available on the Oracle WebCenter on completion of this process."
    }
}


--------------------------------------------------------------------------------
2. CHECK PROCESS EXECUTION STATUS
--------------------------------------------------------------------------------
- Purpose: Checks the execution status and metrics of the background process 
  responsible for generating the error files (ORA_GEN_ERROR_DAT_FILE).
- Method: GET
- URL: https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/latest/dataLoadDataSets/10013913/child/processes?onlyData=true&q=ProcessCode%3D%27ORA_GEN_ERROR_DAT_FILE%27
- Result Status: SUCCESS
- Response Details:
  * ProcessName: Generate HCM Data Loader Files for Data That Failed to Load
  * StartTime: 2026-09-23T22:14:44.999+00:00
  * EndTime: 2026-09-23T22:14:53.506+00:00
  * ElapsedTime: 8.507 seconds



curl --location 'https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/latest/dataLoadDataSets/10013913/child/processes?onlyData=true&q=ProcessCode%3D%27ORA_GEN_ERROR_DAT_FILE%27' \
--header 'Cookie: ak_bmsc=C6D38A440A1097355BF1747378EB8F1C~000000000000000000000000000000~YAAQZg80F9xqu8+gAQAAZqle0AFp0cMvJOJKEHABq47vAX0gKKRKBe+wjS9NPyZPX1CFZ1q4bV0xurz2uHd8jl9isIanUBoko0N5PyR+d78l5NwUZcku98nqEAz6AlfbLIE5XE/6/X0tN/IveyOoHJQRIlOYirsyLLYM0xHwhSjmPbHD7CQzqF/HW9NMs1cNU6IxhT/uPT8hY4CTqdlQseCL+lNHzzMfYFHKicLYogUwCxgNM4Pqio8nZFj/Q+la7Nr0krfr96ThsX+vC5ogz1uvIVKlv++UjW4rRk2omnZPNnxS1uz8HqldaiWMArQIUmyMorY2oJmsTKptIp0zOMMZTRBCfU02VSJ2BPtwhB1NHkcAfPNv1Payymh4Ne0z' \
--header 'Authorization: Basic aGNtX2ltcGwyMDpmXjhkOUteUA=='

Response
{
    "items": [
        {
            "ProcessId": 300000356184996,
            "DataSetId": 300000356184927,
            "DataSetBusObjId": null,
            "ProcessCode": "ORA_GEN_ERROR_DAT_FILE",
            "ProcessName": "Generate HCM Data Loader Files for Data That Failed to Load",
            "DatFileName": null,
            "BusinessObjectName": null,
            "FileActionCode": null,
            "FileActionMeaning": null,
            "TotalCount": 0,
            "SuccessCount": 0,
            "ErrorCount": 0,
            "UnprocessedCount": 0,
            "StartTime": "2026-09-23T22:14:44.999+00:00",
            "EndTime": "2026-09-23T22:14:53.506+00:00",
            "ElapsedTime": "+000000000 00:00:08.507000",
            "ThreadsAllocated": null,
            "ThreadsUsed": null,
            "RequestId": 10013931,
            "CreatedBy": "FAS30.STUDENT",
            "CreationDate": "2026-09-23T22:14:46.089+00:00",
            "LastUpdateDate": "2026-09-23T22:14:49.537+00:00",
            "LastUpdatedBy": "FAS30.STUDENT",
            "ParentRequestId": 10013931
        }
    ],
    "count": 1,
    "hasMore": false,
    "limit": 25,
    "offset": 0,
    "links": [
        {
            "rel": "self",
            "href": "https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com:443/hcmRestApi/resources/11.13.18.05/dataLoadDataSets/10013913/child/processes",
            "name": "processes",
            "kind": "collection"
        }
    ]
}




--------------------------------------------------------------------------------
3. RETRIEVE ERROR MESSAGES & DETAILS
--------------------------------------------------------------------------------
- Purpose: Fetches specific error message descriptions, line details, and user 
  guidance for the failed records inside the data set.
- Method: GET
- URL: https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/11.13.18.05/dataLoadDataSets/10013913/child/messages?onlyData=true&limit=2
- Result Status: SUCCESS
- Response Details (Captured Errors):
  1. Key: E21-Bonus Supplemental-E-1
     - Text: The payroll relationship or assignment isn't eligible for the element Bonus Supplemental Premium Adjustment on the date 2026-08-01.
     - User Details: Check if the employment record for the person meets the eligibility criteria defined for the element.
  2. Key: E22-Gift Card - Deduction-E-2
     - Text: The data isn't valid for the element Gift Card - Deduction and the effective date 2026-08-01.
     - User Details: You can't provide the create entry sequence when deleting or updating an element entry. Provide the entry sequence to delete or update an existing element entry.
================================================================================


curl --location 'https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/11.13.18.05/dataLoadDataSets/10013913/child/messages?onlyData=true&limit=2' \
--header 'Content-Type: application/vnd.oracle.adf.action+json' \
--header 'Cookie: ak_bmsc=C6D38A440A1097355BF1747378EB8F1C~000000000000000000000000000000~YAAQZg80F9xqu8+gAQAAZqle0AFp0cMvJOJKEHABq47vAX0gKKRKBe+wjS9NPyZPX1CFZ1q4bV0xurz2uHd8jl9isIanUBoko0N5PyR+d78l5NwUZcku98nqEAz6AlfbLIE5XE/6/X0tN/IveyOoHJQRIlOYirsyLLYM0xHwhSjmPbHD7CQzqF/HW9NMs1cNU6IxhT/uPT8hY4CTqdlQseCL+lNHzzMfYFHKicLYogUwCxgNM4Pqio8nZFj/Q+la7Nr0krfr96ThsX+vC5ogz1uvIVKlv++UjW4rRk2omnZPNnxS1uz8HqldaiWMArQIUmyMorY2oJmsTKptIp0zOMMZTRBCfU02VSJ2BPtwhB1NHkcAfPNv1Payymh4Ne0z' \
--header 'Authorization: Basic aGNtX2ltcGwyMDpmXjhkOUteUA==' \
--data ''

{
    "items": [
        {
            "MessageLineId": 300000356228687,
            "DataSetId": 300000356184927,
            "DataSetBusObjId": 300000356184950,
            "BusinessObjectDiscriminator": "ElementEntryWithCosting",
            "DatFileName": "ElementEntryWithCosting.dat",
            "OriginatingProcessCode": "LOAD",
            "OriginatingProcessName": "Load",
            "GeneratedByCode": "LOI",
            "GeneratedByMeaning": "Logical object interface",
            "MessageTypeCode": "ERROR",
            "MessageTypeMeaning": "Error",
            "MessageText": "The payroll relationship or assignment isn't eligible for the element Bonus Supplemental Premium Adjustment on the date 2026-08-01.",
            "MessageUserDetails": "Check if the employment record for the person meets the eligibility criteria defined for the element.",
            "ReportedAgainstCode": "ORA_LOGICAL_OBJECT",
            "ReportedAgainstMeaning": "Logical object",
            "FileLine": null,
            "LineOperation": null,
            "ConcatenatedUserKey": "E21-Bonus Supplemental-E-1",
            "SourceSystemOwner": "OIC_LAB",
            "SourceSystemId": "RQST_21",
            "SurrogateId": null,
            "FusionGUID": null,
            "EffectiveStartDate": null,
            "EffectiveEndDate": null,
            "EffectiveSequence": null,
            "EffectiveLatestChange": null,
            "SourceReferenceName001": null,
            "SourceReferenceName002": null,
            "SourceReferenceName003": null,
            "SourceReferenceName004": null,
            "SourceReferenceName005": null,
            "SourceReferenceName006": null,
            "SourceReferenceName007": null,
            "SourceReferenceName008": null,
            "SourceReferenceName009": null,
            "SourceReferenceName010": null,
            "SourceReference001": null,
            "SourceReference002": null,
            "SourceReference003": null,
            "SourceReference004": null,
            "SourceReference005": null,
            "SourceReference006": null,
            "SourceReference007": null,
            "SourceReference008": null,
            "SourceReference009": null,
            "SourceReference010": null
        },
        {
            "MessageLineId": 300000356228688,
            "DataSetId": 300000356184927,
            "DataSetBusObjId": 300000356184950,
            "BusinessObjectDiscriminator": "ElementEntryWithCosting",
            "DatFileName": "ElementEntryWithCosting.dat",
            "OriginatingProcessCode": "LOAD",
            "OriginatingProcessName": "Load",
            "GeneratedByCode": "LOI",
            "GeneratedByMeaning": "Logical object interface",
            "MessageTypeCode": "ERROR",
            "MessageTypeMeaning": "Error",
            "MessageText": "The data isn't valid for the element Gift Card - Deduction and the effective date 2026-08-01.",
            "MessageUserDetails": "You can't provide the create entry sequence when deleting or updating an element entry. Provide the entry sequence to delete or update an existing element entry.",
            "ReportedAgainstCode": "ORA_LOGICAL_OBJECT",
            "ReportedAgainstMeaning": "Logical object",
            "FileLine": null,
            "LineOperation": null,
            "ConcatenatedUserKey": "E22-Gift Card - Deduction-E-2",
            "SourceSystemOwner": "OIC_LAB",
            "SourceSystemId": "RQST_22",
            "SurrogateId": null,
            "FusionGUID": null,
            "EffectiveStartDate": null,
            "EffectiveEndDate": null,
            "EffectiveSequence": null,
            "EffectiveLatestChange": null,
            "SourceReferenceName001": null,
            "SourceReferenceName002": null,
            "SourceReferenceName003": null,
            "SourceReferenceName004": null,
            "SourceReferenceName005": null,
            "SourceReferenceName006": null,
            "SourceReferenceName007": null,
            "SourceReferenceName008": null,
            "SourceReferenceName009": null,
            "SourceReferenceName010": null,
            "SourceReference001": null,
            "SourceReference002": null,
            "SourceReference003": null,
            "SourceReference004": null,
            "SourceReference005": null,
            "SourceReference006": null,
            "SourceReference007": null,
            "SourceReference008": null,
            "SourceReference009": null,
            "SourceReference010": null
        }
    ],
    "count": 2,
    "hasMore": true,
    "limit": 2,
    "offset": 0,
    "links": [
        {
            "rel": "self",
            "href": "https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com:443/hcmRestApi/resources/11.13.18.05/dataLoadDataSets/10013913/child/messages",
            "name": "messages",
            "kind": "collection"
        }
    ]
}
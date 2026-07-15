import boto3
import json  # Note: Change 'JSON' to 'json' for correct import

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume')

def lambda_handler(event, context):
    try:
        # Get the current view count
        response = table.get_item(Key={'id': '1'})
        
        if 'Item' in response:
            views = response['Item'].get('Views', 0)
        else:
            views = 0
        
        # Increment the view count
        views += 1
        
        # Update the DynamoDB item with the new view count
        table.put_item(Item={
            'id': '1',
            'Views': views
        })
        
        # Create the response object with the correct format
        response_payload = {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'Views': int(views)})
        }

        return response_payload
    except Exception as e:
        # Handle exceptions and return an error response
        error_response = {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': f'Error updating view count: {str(e)}'})
        }
        return error_response

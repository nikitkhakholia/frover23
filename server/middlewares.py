from functools import wraps
from flask import request, redirect
import json, globals

def authCodeProtected(func):
    """
    defining middleware
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        """
        checking if auth code is available in the request
        """
        if(request.data and json.loads(request.data)['code']):
            """
            if auth code available
            """
            reqCode = int(json.loads(request.data)['code'])
            reqAddress = request.remote_addr
            """
            checking if there is an active session
            """
            if(globals.authCode == None or globals.userIp == None):
                """
                if no active session then redirect to home page
                """
                return redirect("/")
            else:
                """
                if there is an active session 
                checking remote address
                """
                if(reqAddress != globals.userIp):
                    """
                    if request remote address is not same as session remote address
                    """
                    return {"success": False, "message": "The device is already being used from another browser. Please logout from there and try again here."}
                else:
                    """
                    if request remote address is same as session remote address 
                    checking auth code
                    """
                    if(globals.authCode!=reqCode):
                        """
                        if request auth code is not same as session auth code
                        """
                        return {"success": "Auth Error: Please restart the rover."}
                    else:
                        """
                        if request auth code is same as session auth code
                        """
                        return func(*args, **kwargs)
        else:
            """
            if auth code not available
            """
            return {"success": "Auth Error: Code not found."}
    
    """
    returning middle ware when called
    """
    return wrapper


        

import 'dart:convert';
import 'package:amazon_clone/constants/utils.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void httpErrorHandle({
  required http.Response response,
  required BuildContext context,
  required VoidCallback onSuccess,
}) {
  switch (response.statusCode) {
    case 200:
      onSuccess();
      break;
    case 400:
      showSnackBar(context, jsonDecode(response.body)['msg']);
      break;
    case 500:
      dynamic jsonResponse = jsonDecode(response.body);

      if (jsonResponse != null &&
          jsonResponse.containsKey('error') &&
          jsonResponse['error'] is String) {
        showSnackBar(context, jsonResponse['error']);
      } else {
        // Handle the case when 'error' is missing or not a string
      }

      break;
    default:
      showSnackBar(context, response.body);
  }
}

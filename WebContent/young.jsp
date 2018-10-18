<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@ page import ="lab.mvc.model.Person" %>
	<% System.out.println("haha"); %>
	<jsp:useBean id="bean" beanName="request.getAttribute('bean')" scope="request" type="lab.mvc.model.Person"/>
	
	Prénom : <jsp:getProperty property="firstName" name="bean"/> <br>
	Nom : <jsp:getProperty property="lastName" name="bean"/> <br>
	Date de naissance : <jsp:getProperty property="birthDay" name="bean"/> <br>
	Sexe : <jsp:getProperty property="sex" name="bean"/> <br>
	
	<p> Tu es jeune </p>
</body>
</html>
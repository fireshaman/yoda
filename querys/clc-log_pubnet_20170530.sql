/****** Script para el comando SelectTopNRows de SSMS  ******/
SELECT TOP 1000000000000000000 [CookieID]
      ,[InsertionID]
      ,[PageID]
      ,[DateLog]
      ,[Jour]
      ,[ImageID]
      ,[CountryID]
      ,[StateID]
      ,[Targeting]
      ,[CityId]
      ,[BrowserId]
      ,[screenw]
      ,[screenh]
      ,[OSId]
      ,[Referrer]
      ,[UserAgent]
      ,[linespeed]
      ,[carrierid]
      ,[postalcode]
      ,[Filter]
      ,[DateLogUTC]
      ,[LogType]
      ,[MobileVendor]
      ,[MobileModel]
      ,[MobileConnection]
      ,[SDKVersion]
      ,[IABCategories]
      ,[FormatID]
      ,[ReseauID]
      ,[UniqueLogId]
      ,[isRabbit]
  FROM [AdStatsArchive_20170508].[dbo].[AdLogClic] where InsertionID in (6757189, 6757236, 6758524, 6758502, 6757244)
  union all
  
  SELECT *
  FROM [AdStatsArchive_20170515].[dbo].[AdLogClic] where InsertionID in (6757189, 6757236, 6758524, 6758502, 6757244)
  
  
  
  
  

  
  
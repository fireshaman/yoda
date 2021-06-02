SELECT ai.*
  FROM [AdGestion].[dbo].[AdInsertionReseauView] as airv
  INNER JOIN dbo.AdInsertion as ai on ai.InsertionID=airv.InsertionID
  where ReseauID=XXXXX
  
SELECT ai.InsertionID , ai.CreationDate
  FROM [AdGestion].[dbo].[AdInsertionReseauView] as airv
  INNER JOIN dbo.AdInsertion as ai on ai.InsertionID=airv.InsertionID
  where ReseauID=1507
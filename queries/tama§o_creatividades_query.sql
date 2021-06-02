SELECT 'ANUNCIANTE','CAMPAÑA','ID DE INSERCIÓN','INSERCIÓN','CREATIVIDAD','PESO','IMPRESIONES'
 UNION ALL (
SELECT CONVERT(nchar(30),a.nomsociete),CONVERT(nchar(50),c.nomcampagne),CONVERT(nchar(50),i.InsertionID),CONVERT(nchar(50),i.nominsertion),CONVERT(nchar(30),im.nomimage),CONVERT(nchar(8),im.filesize/1024),CONVERT(nchar(8),SUM(nbdelivre))
FROM AdStatistiques.dbo.AdStatInsertionImageJour AS s with (readuncommitted)
INNER JOIN AdStatistiques.dbo.AdInsertionImage AS im with (readuncommitted) ON im.ImageID = s.imageid
INNER JOIN AdStatistiques.dbo.AdInsertion AS i with (readuncommitted) ON i.insertionid = S.InsertionID
INNER JOIN AdStatistiques.dbo.AdCampagne AS c with (readuncommitted) ON c.CampagneID = i.CampagneID
INNER JOIN AdStatistiques.dbo.AdAnnonceur AS a with (readuncommitted) ON a.SocieteID = c.AnnonceurID
INNER JOIN AdStatistiques.dbo.AdReseauGroupe AS rg with(readuncommitted) ON rg.groupeid = a.groupeid
INNER JOIN AdStatistiques.dbo.AdReseau AS r with(readuncommitted) ON r.reseauid = rg.reseauid
WHERE r.reseauid=863  AND im.FileSize/1024 > 50  and DATEPART(YEAR,s.jour)=2013 and DATEPART(MONTH,s.jour) in (11)
GROUP BY r.nomreseau,a.nomsociete,c.nomcampagne,i.InsertionID,i.nominsertiON,im.nomimage,im.filesize)
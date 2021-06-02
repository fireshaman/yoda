SELECT SiteTable.SiteID, SiteTable.NomSite FROM dbo.AdSite as SiteTable
inner join dbo.AdReseauGroupe as GroupTable
on SiteTable.GroupeID = GroupTable.GroupeID
WHERE GroupTable.ReseauID = 1029;
/* Extract Deal+ ID and Name by NetworkID */
  Select Deal.NetworkID, Deal.DealID, DealName.Name, Deal.IsDealPlus 
  from ssp.RuleDealView as DealName inner join ssp.Deal as Deal
  on Deal.Id = DealName.DealInternalId
  where Deal.networkID in (/* put the networkIDs separated by comma */) and Deal.IsDealPlus = 1 and DealName.Killed = 0
  order by Deal.NetworkId;
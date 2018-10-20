module.exports = {
  all: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%buildfound%'
    or ap.class like '%trianglefound%'
    or ap.class like '%bed%'
    or ap.class like '%craft%fire%'
    or ap.class like '%wheelofpain%'
    or ap.class like '%fishnet%'
    or ap.class like '%crabpot%'
  `,
  buildings: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%buildfound%'
    or ap.class like '%trianglefound%'
  `,
  bedrolls: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%bed%'
  `,
  campfires: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%craft%fire%'
  `,
  wheelsOfPain: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%wheelofpain%'
  `,
  fishNets: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%fishnet%'
  `,
  crabPots: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%crabpot%'
  `,
  pets: `select ap.x, ap.y, ap.z, petname.value as name, petinfo.value as info, petowner.value as owner
    from actor_position as ap
    left outer join properties as petname on petname.object_id = ap.id and petname.name like '%petname'
    left outer join properties as petinfo on petinfo.object_id = ap.id and petinfo.name like '%thrallinfo'
    left outer join properties as petowner on petowner.object_id = ap.id and petowner.name like '%owner%'
    where ap.class like '%wildlife%pet%'
    or ap.class like '%pict_wildlife%'
  `,
  players: `
    select quote(g.name) as guild_name, quote(g.guildid) as guild_id, quote(c.char_name) as char_name,
    case c.rank WHEN '3' then 'Guild master' WHEN '2' then 'Officer' WHEN '1' then 'Member' WHEN '0' then 'Recruit' ELSE c.rank END rank,
    c.level as level, c.playerid as steam_id, quote(c.id) as char_id, ap.x as x, ap.y as y, ap.z as z,
    datetime(c.lastTimeOnline, 'unixepoch') as last_online from characters as c
    left outer join guilds as g on g.guildid = c.guild
    left outer join actor_position as ap on ap.id = c.id
    order by last_online desc
  `,
  pippi: `select ap.class, ap.x, ap.y, ap.z, pippi.value as buffer
    from actor_position as ap
    left outer join properties as pippi on pippi.object_id = ap.id and pippi.name like '%mobconfig'
    where ap.class like '%pippi_mob%'
  `
}
